import {
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

const User = (props) => {
  const { users } = props;
  return (
    <TableBody>
      {users.map((user) => (
        <TableRow key={user.id}>
          <TableCell align="left">{user.name}</TableCell>
          <TableCell align="left">{user.phone}</TableCell>
          <TableCell align="left">{user.age}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
export default User;
