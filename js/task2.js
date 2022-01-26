const inputData = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 4, name: 'Item 4' },
    { id: 7, name: 'Item 7' },
   ];
   function normalize(data) {
        data = {};
        inputData.forEach(function(item, i, inputData) {
            data[item.id] = item;
    });
    return data;
   }
   console.log(normalize(inputData));
   // Expected result:
   // {
   //     entities: {
   //       1: { id: 1, name: "Item 1" },
   //       2: { id: 2, name: "Item 2" },
   //       4: { id: 4, name: "Item 4" },
   //       7: { id: 7, name: "Item 7" },
   //     },
   //     byId: [1, 2, 4, 7],
   //   } (отредактировано) 

