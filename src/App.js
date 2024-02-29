import './App.css';
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
// import PdfConvert from './Component/PdfConvert';
import PdfDownloader from './Component/PdfDownloader';

function App() {
  return (
    <div className="App">
      {/* <PDFDownloadLink  document={<PdfDownloader />}  fileName="PaySlip.pdf">
        {({ loading }) => (
          loading ? <button class='class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Loading Document...</button> : <button className='btn'>Download</button>
        )}
      </PDFDownloadLink> */}
      <PDFViewer height={1000} width={1000}>
        <PdfDownloader />
      </PDFViewer>
    </div> 
  );
}

export default App;
