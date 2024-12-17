```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  let mounted = true; // Flag to track if component is mounted

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('some-api-endpoint');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        if (mounted) {
          setData(jsonData);
        }
      } catch (error) {
        if (mounted) {
          setError(error);
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      mounted = false; // Set mounted to false when unmounting
      console.log('Component is unmounting');
    };
  }, []);

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;
  return (
    <View>
      {data ? <Text>{JSON.stringify(data)}</Text> : <Text>No data</Text>}
    </View>
  );
};

```