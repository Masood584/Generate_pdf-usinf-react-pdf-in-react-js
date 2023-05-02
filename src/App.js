import logo from './logo.svg';
import './App.css';
import InvoicePdf from './components/invoicePdf';
import FileSaver from 'file-saver';
import { pdf } from '@react-pdf/renderer';
import IeltsPdf from './components/ieltsPdf';

function App() {
  const handleDownload = async () => {
    // const blob = await pdf(<InvoicePdf/>).toBlob();
     const blob = await pdf(<IeltsPdf/>).toBlob();
    FileSaver.saveAs(blob, "invoice");
  };
  return (
    <div>
    <button onClick={handleDownload}>download</button>
    </div>
  );
}

export default App;
