import Papa from "papaparse";
import { useEffect, useState } from "react";

export default function useCsvData(fileName) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/data/${fileName}`)
      .then(res => res.text())
      .then(text => {
        const parsed = Papa.parse(text, { header: true });
        setData(parsed.data);
      });
  }, [fileName]);

  return [data, setData];
}
