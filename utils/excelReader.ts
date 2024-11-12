import * as xlsx from 'xlsx';

export function obtenerDatosDesdeExcel(): Record<string, any>[] {
  const rutaArchivo = './Data/Libro1.xlsx'; 
  const nombreHoja = 'Data';
  
  const workbook = xlsx.readFile(rutaArchivo);
  const worksheet = workbook.Sheets[nombreHoja];
  const datos = xlsx.utils.sheet_to_json<Record<string, any>>(worksheet);

  return datos;
}