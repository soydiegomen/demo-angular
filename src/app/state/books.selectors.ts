import { createSelector, createFeatureSelector } from "@ngrx/store";
//import { AppState } from "./app.state";
import { Book } from "../models/books.model";
 
export const featureKey = 'feature';
 
export interface FeatureState {
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
}
 
export interface AppState {
  feature: FeatureState;
}

export const selectBookFeature = (state: AppState) => state.feature;
 
export const selectBooks = createSelector(
  selectBookFeature,
  (state: FeatureState) => state.books
);
 
export const selectCollectionFeature = createFeatureSelector<AppState, FeatureState>(featureKey);

export const selectCollections = createSelector(
  selectCollectionFeature,
  (state: FeatureState) => state.collection
);
 
export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionFeature,
  (books: Array<Book>, collection: Array<string>) => {
    return collection.map((id) => books.find((book) => book.id === id));
  }
);


/* export interface State {
  evenNums: number[];
  oddNums: number[];
}
 
export const selectSumEvenNums = createSelector(
  (state: State) => state.evenNums,
  evenNums => evenNums.reduce((prev, curr) => prev + curr)
);

export const selectSumOddNums = createSelector(
  (state: State) => state.oddNums,
  oddNums => oddNums.reduce((prev, curr) => prev + curr)
);

export const selectTotal = createSelector(
  selectSumEvenNums,
  (evenSum) => evenSum
);
  */