interface letterFile {
  displayName: string;
  description: string;
  folders: {
    name: string;
    items: {
      name: string;
      value: {
        ops: { [key: string]: any }[];
      };
    }[];
  }[];
}

export default letterFile;
