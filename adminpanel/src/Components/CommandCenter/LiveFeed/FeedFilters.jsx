import { Select, DatePicker, Space } from 'antd';
import { useState } from 'react';

const { RangePicker } = DatePicker;

// Sample booth list for fallback
const sampleBooths = [
  { id: 1, name: "Booth 1" },
  { id: 2, name: "Booth 2" },
  { id: 3, name: "Booth 3" }
];

export default function FeedFilters({ booths = [], onFilterChange = () => {} }) {
  const boothOptions = booths.length > 0 ? booths : sampleBooths;

  const [filters, setFilters] = useState({
    booth: 'all',
    type: 'all',
    dateRange: null
  });

  const handleChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <Space wrap>
      {/* Booth Filter */}
      <Select
        placeholder="Filter by Booth"
        style={{ width: 180 }}
        onChange={value => handleChange('booth', value)}
        defaultValue="all"
      >
        <Select.Option value="all">All Booths</Select.Option>
        {boothOptions.map(booth => (
          <Select.Option key={booth.id} value={booth.id}>
            {booth.name}
          </Select.Option>
        ))}
      </Select>

      {/* Activity Type Filter */}
      <Select
        placeholder="Filter by Type"
        style={{ width: 180 }}
        onChange={value => handleChange('type', value)}
        defaultValue="all"
      >
        <Select.Option value="all">All Activities</Select.Option>
        <Select.Option value="voter">Voter Updates</Select.Option>
        <Select.Option value="turnout">Turnout Data</Select.Option>
        <Select.Option value="issue">Field Issues</Select.Option>
      </Select>

      {/* Date Range Picker */}
      <RangePicker
        showTime
        onChange={dates => handleChange('dateRange', dates)}
      />
    </Space>
  );
}
