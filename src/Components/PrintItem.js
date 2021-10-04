import PrintColumn from "./PrintColumn";

export default function PrintItem({ data }) {
  return data.map((ele, ind) => {
    return (
      <tbody>
        <tr key={ind}>
          <PrintColumn ele={ele} />
        </tr>
      </tbody>
    );
  });
}
