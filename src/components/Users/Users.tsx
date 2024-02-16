import { Box } from '@mui/material';
import { useState, useEffect } from 'react';

interface IUser {
  name: string;
}

interface IResponse {
  data: IUser[];
}

export default function Users() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await fetch('https://', { signal: controller.signal });
        const typedResp: IResponse = await response.json();
        isMounted && setUsers(typedResp.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);
  return (
    <Box component="h1">
      {users.length ? (
        <Box>
          {users.map((user, index) => (
            <Box key={index}>{user?.name}</Box>
          ))}
        </Box>
      ) : (
        <Box>No found user</Box>
      )}
    </Box>
  );
}
