function problem1(pobi, crong) {
  var answer = -1;

  var pobiScore, crongScore;

  var pobiLeftScore = pobi[0];
  var pobiRightScore = pobi[1];
  var crongLeftScore = crong[0];
  var crongRightScore = crong[1];

  if (
    parseInt(pobiLeftScore) == parseInt(pobiRightScore) - 1 &&
    parseInt(crongLeftScore) == parseInt(crongRightScore) - 1
  ) {
    pobiScore = getScore(pobi);
    crongScore = getScore(crong);

    answer = pobiScore >= crongScore ? (pobiScore == crongScore ? 0 : 1) : 2;
  }

  return answer;
}

function getScore(user) {
  return Math.max(getLeftMaxScore(user), getRightMaxScore(user));
}

function getLeftMaxScore(user) {
  return Math.max(add(user[0]), multiple(user[0]));
}

function getRightMaxScore(user) {
  return Math.max(add(user[1]), multiple(user[1]));
}

function add(number) {
  var answer = 0;

  while (true) {
    answer += number % 10;

    if (number <= 9) return answer;
    number = parseInt(number / 10);
  }
}

function multiple(number) {
  var answer = 1;

  while (true) {
    answer *= number % 10;

    if (number <= 9) return answer;
    number = parseInt(number / 10);
  }
}

module.exports = problem1;
