---
title: "Assignment: GraphQL queries"
---

## Schema

```
type Interest implements Node {
  id: ID! @isUnique
  name: String!
}
```

## Queries

```
query allThings {
    Thing {
        id
        field1
    }
}

query specificThing($id: String) {
    Thing(id: $id) {
        id
        field1
    }
}
```

*Task: display interests retrieved via GraphQL*