// src/services/recommendationService.ts
export const fetchRecommendations = async () => {
    try {
      const response = await fetch('../countries.json');
      console.log(response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log("Hello")
      const data = await response.json();
      console.log("Data "+data);
      return data;
    } catch (error) {
      console.error('Error fetching recommendations', error);
      throw error;
    }
  };
  