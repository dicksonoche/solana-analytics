import { useQuery } from '@apollo/client';
import { motion } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import { GET_TRANSACTION_STATS } from '@/lib/queries';
import Filters from '@/components/Filters';
import DashboardLayout from '@/components/DashboardLayout';

export default function Dashboard() {
  const { category, timeRange } = useAppStore();
  const { data, loading, error } = useQuery(GET_TRANSACTION_STATS, {
    variables: { category, startTime: timeRange[0], endTime: timeRange[1] },
  });

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-4 bg-gray-900"
    >
      <Filters />
      <DashboardLayout data={data.transactionStats} />
    </motion.div>
  );
}