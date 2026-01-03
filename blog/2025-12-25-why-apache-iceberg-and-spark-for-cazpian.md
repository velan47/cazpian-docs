---
slug: why-apache-iceberg-and-spark-for-cazpian
title: "Why Apache Iceberg and Spark for Cazpian?"
description: "Explain the technology choices: Apache Iceberg, Spark, AWS-first approach."
tags: [iceberg, spark, technology, aws]
image: /img/Why%20Apache%20Iceberg%20and%20Spark%20for%20Cazpian.png
---

![Why Apache Iceberg and Spark for Cazpian?](/img/Why%20Apache%20Iceberg%20and%20Spark%20for%20Cazpian.png)

When we started building Cazpian, we had a choice of many different storage formats and compute engines. We chose **Apache Iceberg** and **Apache Spark** for three main reasons:

<!-- truncate -->

### 1. Interoperability
Iceberg represents the future of open table formats. By using Iceberg, Cazpian ensures that your data remains yours. You can query your tables from Athena, Snowflake, or Databricks without any vendor lock-in.

### 2. Massive Scalability
Apache Spark remains the industry standard for distributed computing. Our integrated Spark engine is optimized specifically for Iceberg, providing lightning-fast performance for even the largest datasets.

### 3. AWS Native Integration
By focusing exclusively on AWS, we can optimize the storage layer (S3) and the compute layer in ways that "cloud-agnostic" platforms simply cannot. This results in better performance and lower costs for our users.
