```javascript
const pipeline = [
  {
    $lookup: {
      from: "collectionB",
      localField: "_id",
      foreignField: "foreignKey",
      as: "relatedDocs",
    },
  },
  {
    $unwind: "$relatedDocs",
  },
  {
    $project: {
      _id: 1,
      fieldFromA: 1,
      fieldFromB: "$relatedDocs.fieldFromB",
    }
  }
];

// This will cause an error if there are no matching documents in collectionB
const result = await db.collection('collectionA').aggregate(pipeline).toArray();
```