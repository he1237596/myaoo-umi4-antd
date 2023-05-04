/*
 * @Author: Chris
 * @Date: 2023-04-04 16:40:17
 * @LastEditors: Chris
 * @LastEditTime: 2023-04-27 15:06:15
 * @Descripttion: **
 */
import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
// @ts-ignore
import { useModel } from '@umijs/max';
import styles from './index.less';
// import Text from './test'
// import Text1 from './test1'

const HomePage: React.FC = () => {
  const { name } = useModel('global');

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim('dddd')} />
        {/* <Text />
        <Text1 /> */}
      </div>
    </PageContainer>
  );
};

export default HomePage;
