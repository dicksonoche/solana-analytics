export const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString();
  };