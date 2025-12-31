const fs = require('fs');
const path = require('path');

const blogPostsPath = path.join(__dirname, '../blog-posts.json');
const blogDir = path.join(__dirname, '../blog');

// Check if we should "Stay Awake" based on a command line argument
const shouldWatch = process.argv.includes('--watch');

function generate() {
    try {
        // 1. Clean up OLD generated files
        const files = fs.readdirSync(blogDir);
        files.forEach(file => {
            // Only delete files that look like our generated blogs
            if ((file.endsWith('.md') || file.endsWith('.mdx')) && /^\d{4}-\d{2}-\d{2}-/.test(file)) {
                fs.unlinkSync(path.join(blogDir, file));
            }
        });

        const blogPosts = JSON.parse(fs.readFileSync(blogPostsPath, 'utf8'));
        console.log(`[${new Date().toLocaleTimeString()}] Generating ${blogPosts.length} posts...`);

        blogPosts.forEach(post => {
            const frontmatter = `---
slug: ${post.slug}
title: "${post.title}"
description: "${post.description}"
tags: [${post.tags.join(', ')}]
---

${post.content}
`;

            const datePrefix = post.date ? post.date : new Date().toISOString().split('T')[0];
            const filename = `${datePrefix}-${post.slug}.md`;
            const filePath = path.join(blogDir, filename);

            fs.writeFileSync(filePath, frontmatter, 'utf8');
        });

        console.log('✅ Blog files updated successfully!');
    } catch (err) {
        console.error('❌ Error reading blog-posts.json:', err.message);
    }
}

// 1. Always run once at the start
generate();

// 2. Only "Stay Awake" if --watch is present
if (shouldWatch) {
    console.log('\n👀 WATCHER ACTIVE: Watching blog-posts.json for changes...');
    fs.watchFile(blogPostsPath, { interval: 500 }, (curr, prev) => {
        if (curr.mtime !== prev.mtime) {
            console.log('\n📝 Change detected! Regenerating...');
            generate();
        }
    });
}
// If not watching, the script exits here so Docusaurus can start!
