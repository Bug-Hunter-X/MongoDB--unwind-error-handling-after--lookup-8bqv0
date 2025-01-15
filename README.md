# MongoDB Aggregation: Handling $unwind Errors after $lookup
This repository demonstrates a common issue in MongoDB aggregation pipelines involving `$lookup` and `$unwind`.  When using `$lookup` to join collections, and no matching documents are found for a given document in the source collection, the `$unwind` stage can throw an error.  This example shows how to handle this scenario gracefully.

## Problem
The original code uses a `$lookup` to join two collections. The `$unwind` stage then attempts to process the resulting array. However, if the `$lookup` stage does not find any matching documents for a particular record, `$unwind` will fail.

## Solution
The solution involves adding a `$match` stage to filter out documents where the `relatedDocs` array is empty after the `$lookup` stage.  This prevents the `$unwind` from processing empty arrays and avoids the error. 
