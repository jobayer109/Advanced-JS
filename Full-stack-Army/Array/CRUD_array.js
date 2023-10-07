/*
    Requirements:
    -------------
        - Create an array of 10 students
        - id
        - name
        - email

*/

// Random uuid generate
/**
 * Returns a UUIDv4 as string
 *
 * @returns {string}
 */
randomUuid = () => {
  return String("xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx").replace(
    /[xy]/g,
    (character) => {
      const random = (Math.random() * 16) | 0;
      const value = character === "x" ? random : (random & 0x3) | 0x8;

      return value.toString(16);
    }
  );
};
