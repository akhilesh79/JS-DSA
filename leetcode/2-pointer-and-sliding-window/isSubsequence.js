var isSubsequence = function (s, t) {
  if (s.length > t.length) return false;

  let i = 0;
  let j = 0;
  while (j < t.length) {
    if (s[i] == t[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }

  return i == s.length;
};

isSubsequence('abc', 'ahbgdc');
