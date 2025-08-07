import { sha256 } from 'js-sha256';

const JavaScriptNumber = 63;
const PythonNumber = 71;
const JavaNumber = 62;
const CPlusPlusNumber = 51;

const JavaScriptImports = '';
const PythonImports = '';
const JavaImports = '';
const CPlusPlusImports = '';

export function buildSubmissionCode(userCode: string, testCode: string, languageId: number, hash: string) {
  testCode = addHash(testCode, hash);
  if (languageId == JavaScriptNumber) {
    return JavaScriptImports + '\n' + userCode + '\n' + testCode;
  }
  else if (languageId == PythonNumber) {
    return PythonImports + '\n' + userCode + '\n' + testCode;
  }
  else if (languageId == JavaNumber) {
    return JavaImports + '\n' + userCode + '\n' + testCode;
  }
  else if (languageId == CPlusPlusNumber) {
    return CPlusPlusImports + '\n' + userCode + '\n' + testCode;
  }
}

export function getHash(): string {
  return sha256('');
}

function addHash(testCode: string, hash: string): string {
  return testCode.replace("HASHHERE", `${hash}`);
}