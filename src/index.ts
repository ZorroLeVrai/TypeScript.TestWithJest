type SuccessiveNumberResult = { isSuccessive: boolean, strOutput: string };

function getSuccessiveNumbers(num: number): string[]
{
  const result: Array<string> = [];

  for (let i=1; i < num/2; ++i)
  {
    const {isSuccessive, strOutput} = isSuccessiveNumber(i);
    if (isSuccessive)
      result.push(strOutput);
  }

  return result;

  function isSuccessiveNumber(index: number): SuccessiveNumberResult
  {
    let str = String(index);
    let sum = index;
    for (let current = index+1; sum <= num; ++current)
    {
      sum += current;
      str = str.concat('+', String(current));
      if (sum === num)
        return { isSuccessive: true, strOutput: str };
    }

    return { isSuccessive: false, strOutput: str };
  }
}

console.log(getSuccessiveNumbers(55));

export = getSuccessiveNumbers;