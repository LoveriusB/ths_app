import { isNil, isEmpty, isEqual } from 'lodash';

/**
 * This function checks if the data your gave as parameter is nil or empty
 * according to lodash definitions of nil and empty.
 *
 * Basically checks if data is empty, null or undefined.
 * data does not need to be an array.
 *
 * @param data Whatever you want to check.
 * @returns true if null | undefined | empty. false otherwise.
 *
 * @example
 * isNilOrEmpty('') => true
 * isNilOrEmpty([]) => true
 * isNilOrEmpty(undefined) => true
 * isNilOrEmpty(null) => true
 * isNilOrEmpty({}) => true
 * isNilOrEmpty({name: 'test'}) => false
 */

export const isNilOrEmpty = (data: unknown): data is null | undefined | '' =>
  isNil(data) || isEmpty(data);

/**
 *
 * @param string the string to be changed
 * @returns the string set in params with the first character set in lower case.
 *
 * @example
 * setFirstLetterLowerCase('bruno') => 'bruno'
 * setFirstLetterLowerCase('Bruno') => 'bruno'
 */
export const setFirstLetterLowerCase = (string: string): string =>
  `${string.charAt(0).toLowerCase()}${string.slice(1)}`;

/**
 * This function will put an element of the given array at the end of it only if said element
 * is present in this array.
 *
 * @param array the array from which you want to take an element and put it at the end
 * @param objectToRemove the element you want to put at the end of the array
 *
 * @returns the array with the moved element if it was present.
 * @example
 * putArrayElementAtEnd([1, 2, 3], 2) => [1, 3, 2]
 * putArrayElementAtEnd([1, 2, 3], 4) => [1, 2, 3]
 * putArrayElementAtEnd([1, 2, 3], 3) => [1, 2, 3]
 */
export const moveArrayElementAtEnd = <T>(
  array: T[],
  element: T,
  field?: keyof T
) => {
  const index = array.findIndex((item) => {
    if (field) {
      return isEqualField(item, element, field);
    }
    return isEqual(item, element);
  });
  if (index > -1) {
    array.splice(index, 1);
    array.push(element);
  }
  return array;
};

/**
 * This function will put an element of the given array at the end of it only if said element
 * is present in this array. If it is not present, it will push it at the end of the array.
 *
 * @param array the array from which you want to shift an element and put it at the end or push it if it does not exist in the array
 * @param objectToAddOrMove the element you want to put at the end of the array
 * @returns the array with the moved element if it was present or the array with the pushed element if it was not present.
 * @example
 * pushOrMoveElementAtEndOfArray([1, 2, 3], 2) => [1, 3, 2]
 * pushOrMoveElementAtEndOfArray([1, 2, 3], 4) => [1, 2, 3, 4]
 * pushOrMoveElementAtEndOfArray([1, 2, 3], 3) => [1, 2, 3]
 * pushOrMoveElementAtEndOfArray([1, 2, 3], 3) => [1, 2, 3]
 */
export const pushOrMoveElementAtEndOfArray = <T>(
  array: T[],
  objectToAddOrMove: T,
  field?: keyof T
) => {
  let mutableArray;
  const doesExist = array.some((existingObject) => {
    if (field) {
      return isEqualField(existingObject, objectToAddOrMove, field);
    }
    return isEqual(existingObject, objectToAddOrMove);
  });

  if (!doesExist) {
    array.push(objectToAddOrMove);
    mutableArray = array;
  } else {
    mutableArray = moveArrayElementAtEnd(array, objectToAddOrMove, field);
  }

  return mutableArray;
};

/**
 * this function will compare the field of two entities and return true if they are equal.
 *
 * @param entity1 the entity you want to compare the field of with the second entity
 * @param entity2 the entity you want to compare the field of with the first entity
 * @param field the field you want to compare in both entities
 * @returns true if the field of both entities are equal. false otherwise.
 *
 * @example
 * isEqualField({name: 'test'}, {name: 'test'}, 'name') => true
 * isEqualField({name: 'test'}, {name: 'test2'}, 'name') => false
 * isEqualField({name: 'test'}, {name: 'test'}, 'id') => false
 */
export const isEqualField = <T>(entity1: T, entity2: T, field: keyof T) => {
  return isEqual(entity1[field], entity2[field]);
};

/**
 * this function will split a string into 3 parts according to the start and end position given in parameters.
 *
 * @param inputString the string to be splitted
 * @param startPos the start position of the substring to be splitted
 * @param endPos the end position of the substring to be splitted
 * @returns a tab made of 3 strings. The first one is the substring before the start position, the second one is the substring between the start and end position and the third one is the substring after the end position.
 *
 * @example
 * splitString('test', 0, 2) => ['', 'te', 'st']
 * splitString('test', 1, 3) => ['t', 'es', 't']
 * splitString('test', 0, 4) => ['', 'test', '']
 * splitString('test', 0, 0) => ['', '', 'test']
 * splitString('test', 4, 4) => ['test', '', '']
 * splitString('test', 1, 2) => ['t', 'e', 'st']
 * splitString('test', 2, 1) => null
 * splitString('test', -1, 1) => null
 * splitString('test', 1, 5) => null
 */
export const splitString = (
  inputString: string,
  startPos: number,
  endPos: number
): [string, string, string] => {
  if (startPos < 0 || startPos > endPos || endPos > inputString.length + 1) {
    return ['', '', ''];
  }

  const part1 = inputString.substring(0, startPos);
  const part2 = inputString.substring(startPos, endPos);
  const part3 = inputString.substring(endPos);

  return [part1, part2, part3];
};

/**
 * This function will convert a string representing a pixel value (e.g., "100px") to a number.
 * If the string does not end with 'px', it will simply parse the number.
 *
 * @param value The string value to convert to a number.
 * @returns The numeric value extracted from the string.
 *
 * @example
 * fromPixelsToNumber('100px') => 100
 * fromPixelsToNumber('50') => 50
 * fromPixelsToNumber('200.5px') => 200.5
 */
export const fromPixelsToNumber = (value: string): number => {
  if (value.endsWith('px')) {
    return parseFloat(value.slice(0, -2));
  }
  return parseFloat(value);
};
