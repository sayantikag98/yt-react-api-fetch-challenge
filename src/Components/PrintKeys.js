const PrintKeys = ({ text, ele }) => {
  const arr = Object.values(ele);
  return arr.map((value, ind) => (
    <td className={text} key={ind}>
      {/*for objects to put in as a react child use JSON.stringify()*/}
      {typeof value === "object" ? (
        <PrintKeys text={text} ele={value} /> // RECURSION
      ) : (
        value
      )}
    </td>
  ));
};

export default PrintKeys;
