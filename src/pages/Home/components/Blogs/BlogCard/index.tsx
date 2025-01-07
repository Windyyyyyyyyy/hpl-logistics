import { Link } from 'react-router';
import type { Blog } from '../../../../../types';
import { formatDay, formatMonth } from '../../../../../utils/formatDateNow';

interface StateProps {
  value: Blog;
}

const BlogCard = ({ value }: StateProps) => {
  return (
    <div className="px-[15px]">
      <div className="shadow-blog-card">
        <div className="relative flex aspect-[16/9] items-center justify-center bg-gray-200">
          <img
            src={value.imagesUrl}
            alt="image post"
            className="transition-all duration-300 ease-linear"
          />
          <div className="absolute left-0 top-0 bg-custom-blue px-[17px] py-[12px] text-center text-white">
            <h6 className="pb-[3px] text-sm font-bold uppercase">{formatMonth(value.createdAt)}</h6>
            <h5 className="text-[27px] font-bold">{formatDay(value.createdAt)}</h5>
          </div>
        </div>
        <div className="px-[25px] pb-[25px] pt-[30px]">
          <Link to="/">
            <h4 className="text-body font-bold uppercase leading-[26px] text-[#2f2f30] transition-all duration-300 ease-linear hover:text-custom-blue">
              {value.title}
            </h4>
          </Link>
          <p className="px-0 pb-[20px] pt-[13px] text-justify text-[15px] leading-[26px] text-text-grey">
            {value.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
