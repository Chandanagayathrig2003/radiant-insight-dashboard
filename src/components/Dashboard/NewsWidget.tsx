
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Newspaper, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { fetchNews, setSelectedCategory } from '../../store/slices/newsSlice';

const NewsWidget: React.FC = () => {
  const dispatch = useAppDispatch();
  const { articles, loading, error, selectedCategory } = useAppSelector((state) => state.news);

  const categories = ['all', 'technology', 'business', 'sports', 'health', 'entertainment'];

  useEffect(() => {
    dispatch(fetchNews(selectedCategory));
  }, [dispatch, selectedCategory]);

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 bg-muted rounded w-3/4"></div>
                <div className="h-3 bg-muted rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Newspaper className="h-5 w-5" />
            <span>Latest News</span>
          </CardTitle>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => dispatch(setSelectedCategory(category))}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          {error && (
            <p className="text-destructive mb-4">Error: {error}</p>
          )}
          <div className="space-y-4">
            {articles.map((article) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="border-b border-border pb-4 last:border-b-0"
              >
                <div className="flex space-x-4">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm mb-1">{article.title}</h4>
                    <p className="text-muted-foreground text-xs mb-2">{article.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {new Date(article.publishedAt).toLocaleDateString()}
                      </span>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default NewsWidget;
