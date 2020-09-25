export function greet(name: string) {
  return 'Hi, ' + name + ' welcome to my course on declaration files!';
}

export function getAuthorContactInfo() {
  return new AuthorInfo('Ain', 'Mor', 'AINMOR');
}
export function getModuleName(moduleNumber: number) {
  switch (moduleNumber) {
    case 1:
      return 'Intro to my course';
    case 2:
      return 'Declaration File Fundamentals';
    case 3:
      return 'Building a Declaration File';
    case 4:
      return 'Publishing your own library';
    default:
      return 'No such module exists';
  }
}

export class AuthorInfo {
  firstName: string;
  lastname: string;
  twitterHandle: string;
  constructor(firstName: string, lastname: string, twitterHandle: string) {
    this.firstName = firstName;
    this.lastname = firstName;
    this.twitterHandle = firstName;
  }
}
