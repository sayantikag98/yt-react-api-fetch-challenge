const PrintKeys = ({ text, ele }) => {
  const arr = Object.keys(ele);
  return arr.map((e, ind) => (
    <td className={text} key={ind}>
      {/*for objects to put in as a react child use JSON.stringify()*/}
      {JSON.stringify(ele[e])}
    </td>
  ));
};

export default PrintKeys;
