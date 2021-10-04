export default function PrintColumn({ ele }) {
  const PrintKeys = ({ text }) => {
    const arr = Object.keys(ele);
    return arr.map((e, ind) => (
      <td className={text} key={ind}>
        {JSON.stringify(ele[e])}
      </td>
    ));
  };
  return <PrintKeys text="table-column" />;
}
