import { sha256 } from 'js-sha256';

const JavaScriptNumber = 63;
const PythonNumber = 71;
const JavaNumber = 62;
const CPlusPlusNumber = 54;

const PythonImports = `
from typing import List, Tuple, Dict, Set, Optional
import math
import sys
import collections
import itertools
import heapq
import bisect
import re
import string
import random
import functools
import operator
`;
const JavaImports = `
import java.util.*;
import java.math.*;
import java.util.regex.*;
import java.util.stream.*;
`;
const CPlusPlusImports = `
#include <bits/stdc++.h>
using namespace std;
`;
export function buildSubmissionCode(userCode: string, testCode: string, languageId: number, hash: string) {
  testCode = addHash(testCode, hash);
  if (languageId == JavaScriptNumber) {
    return userCode + '\n' + testCode;
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