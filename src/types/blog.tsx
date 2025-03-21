export interface Blog {
    id: number;
    title: string;
    description: string;
    date: Date;
    autor: string;
    category: string;
    tags: string[];
    pdfUrl: string;
    linkedinUrl: string;
    imgUrl: string;
  }
  
  export type CardBlogProps = Pick<Blog, 'title' | 'description' | 'imgUrl' | 'date'>;