"use client";
import React, { useState, useEffect } from "react";
import { Card, CardMedia, CardContent, Typography, Grid2, Skeleton } from "@mui/material";
import { CardBlogProps } from "@/types/blog";
import blogData from "../../mocks/blogs.json";

export default function ViewCardBlog() {
    const [data, setData] = useState<CardBlogProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = blogData.slice(0, 5).map((blog) => ({
                title: blog.title,
                description: blog.description,
                imgUrl: blog.imgUrl,
                date: new Date(blog.date),
            }));
            setData(fetchedData);
            setLoading(false);
        };
        fetchData();
    }, []);

    return (
        <>
            {loading ? (
                 <Grid2 container spacing={3} direction={{ xs: "column", md: "row" }}>
                 {Array.from({ length: 5 }).map((_, index) => (
                     <Grid2 key={index} spacing={3}>
                         <Card sx={{ maxWidth: 345 }}>
                            <Skeleton variant="rectangular" width={345} height={140} />
                             <CardContent>
                                 <Typography gutterBottom variant="h5" component="div">
                                     <Skeleton variant="text" width="80%" />
                                 </Typography>
                                 <Typography variant="body2" color="text.secondary">
                                     <Skeleton variant="text" width="100%" />
                                 </Typography>
                                 <Typography variant="caption" color="text.secondary">
                                     <Skeleton variant="text" width="60%" />
                                 </Typography>
                             </CardContent>
                         </Card>
                     </Grid2>
                 ))}
             </Grid2>
            ) : (
                <Grid2 container spacing={2} direction={{ xs: "column", md: "row" }}>
                    {data.map((blog, index) => (
                        <Grid2 key={index} spacing={3}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={blog.imgUrl}
                                    alt={blog.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {blog.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {blog.description}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {new Date(blog.date).toLocaleDateString()}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid2>
                    ))}
                </Grid2>
            )}
        </>
    );
}