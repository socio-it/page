"use client";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CardBlogProps } from "@/types/blog";

export default function CardBlog({ title, description, imgUrl, date }: CardBlogProps) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={imgUrl}
        alt="Previsualización del PDF"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {date.toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
}
