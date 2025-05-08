export const uploadDocument = (file: File) => {
    const data = new FormData();
  
    data.append("file", file, file.name);
  };
  