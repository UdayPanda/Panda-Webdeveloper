import { saveAs } from "file-saver";
import Papa from "papaparse";

export function downloadCsv(data, baseName) {
  const csv = Papa.unparse(data);
  const now = new Date();
  const fileName = `${baseName}_${now.toISOString().replace(/[:.]/g, "-")}.csv`;

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  saveAs(blob, fileName);
}
