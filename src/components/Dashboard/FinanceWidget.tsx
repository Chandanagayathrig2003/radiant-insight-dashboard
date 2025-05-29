
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { fetchStockData } from '../../store/slices/financeSlice';

const FinanceWidget: React.FC = () => {
  const dispatch = useAppDispatch();
  const { stocks, loading, error, selectedStock } = useAppSelector((state) => state.finance);

  useEffect(() => {
    dispatch(fetchStockData(selectedStock));
  }, [dispatch, selectedStock]);

  const currentStock = stocks.find(stock => stock.symbol === selectedStock);

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-muted rounded w-1/4"></div>
            <div className="h-8 bg-muted rounded w-1/2"></div>
            <div className="h-32 bg-muted rounded"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <DollarSign className="h-5 w-5" />
            <span>Stock Market</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {error && (
            <p className="text-destructive mb-4">Error: {error}</p>
          )}
          {currentStock && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{currentStock.symbol}</h3>
                  <p className="text-sm text-muted-foreground">{currentStock.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">${currentStock.price.toFixed(2)}</p>
                  <div className={`flex items-center ${
                    currentStock.change >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {currentStock.change >= 0 ? (
                      <TrendingUp className="h-4 w-4 mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 mr-1" />
                    )}
                    <span className="text-sm">
                      {currentStock.change >= 0 ? '+' : ''}{currentStock.change.toFixed(2)} 
                      ({currentStock.changePercent.toFixed(2)}%)
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Volume</p>
                  <p className="font-semibold">{currentStock.volume.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">High</p>
                  <p className="font-semibold">${currentStock.high.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Low</p>
                  <p className="font-semibold">${currentStock.low.toFixed(2)}</p>
                </div>
              </div>

              <div className="h-64">
                <h4 className="text-sm font-medium mb-2">Price Chart</h4>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={currentStock.chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="price" 
                      stroke="#22c55e" 
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FinanceWidget;
