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
    $match: { relatedDocs: { $ne: [] } }
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

// This will no longer throw an error
const result = await db.collection('collectionA').aggregate(pipeline).toArray();
```