// import { DataType } from "../generated";

// const compareOrder = (d1: any, d2: any) => (d1.order ?? 9) - (d2.order ?? 9);

// export const groupDocs = (docs: DataType.DocShortFragment[]) => {
//   return docs
//     .reduce((acc, doc) => {
//       const found = acc.find((s) => s.id === doc.section?.id);

//       if (found) {
//         found.docs.push(doc);
//       } else if (doc.section?.id) {
//         acc.push({
//           ...doc.section,
//           docs: [doc],
//         });
//       }

//       return acc;
//     }, [] as (DataType.DocSectionFragment & { docs: DataType.DocShortFragment[] })[])
//     .map((grouped) => {
//       return {
//         ...grouped,
//         docs: grouped.docs.sort(compareOrder),
//       };
//     })
//     .sort(compareOrder);
// };
