import { gql } from '@apollo/client';

export const GET_TRANSACTION_STATS = gql`
  query GetTransactionStats($category: String!, $startTime: Int!, $endTime: Int!) {
    transactionStats(category: $category, startTime: $startTime, endTime: $endTime) {
      successRate
      monthlyCounts {
        month
        count
      }
      networkMetrics {
        throughput
        latency
        uptime
      }
      protocolUsage {
        protocol
        usage
      }
    }
  }
`;