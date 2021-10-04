import PrintCell from "./PrintCell";

export default function PrintItem({ data }) {
  return data.map((ele, ind) => {
    return (
      <tbody>
        <tr key={ind}>
          <PrintCell ele={ele} />
        </tr>
      </tbody>
    );
  });
}
