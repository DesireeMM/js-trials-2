'use strict';

// 1. printIndices
function printIndices(items) {
  for (let i = 0; i < (items.length); i++) {
    console.log(`${items[i]} ${i}`)
  }
}

// 2. everyOtherItem
function everyOtherItem(items) {
  const result = []

  for (let i = 0; i < (items.length); i++) {
    if (i % 2 === 0) {
      result.push(items[i])
    }
  }

  console.log(result)
}

// 3. smallestNItems
function smallestNItems(items, n) {
  const sorted_items = items.sort((a, b) => a - b);
  const sorted_n_items = sorted_items.slice(0, n)
  sorted_n_items.reverse()
  console.log(sorted_n_items)
}
