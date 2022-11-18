import { Paper, Box, CardContent, CardMedia, Typography } from "@mui/material";

const BookItem = ({ book }) => {
  return (
    <Paper elevation={3}>
      <CardMedia
        component="img"
        image={book.volumeInfo?.imageLinks?.thumbnail}
        height={200}
      />
      <CardContent>
        <Box>
          <Typography variant="h6">{book.volumeInfo.title}</Typography>
        </Box>
      </CardContent>
    </Paper>
  );
};

export default BookItem;
