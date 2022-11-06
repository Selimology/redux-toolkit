import { parseISO, formatDistanceToNow, formatDistance } from 'date-fns';

const TimeAgo = ({ timestamp }) => {
  let timeAgo = '';
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <span title={timestamp}>
      ( &nbsp;{' '}
      <i>
        {timeAgo}
        &nbsp; <i>timeAgo</i>)
      </i>
    </span>
  );
};

export default TimeAgo;
