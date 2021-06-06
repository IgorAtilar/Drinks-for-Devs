import React, { useEffect } from "react";
import { View, StyleSheet, Animated } from "react-native";
import Svg, {Path} from "react-native-svg";
export default function loading() {
  const opacity = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity }}>
        <Svg
          width="132"
          height="152"
          viewBox="0 0 132 152"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M110.863 50.7365C110.603 50.0873 110.333 49.4461 110.054 48.813C110.474 48.6014 110.886 48.3805 111.298 48.1595C117.889 44.5459 121.755 39.9588 121.07 36.1413C120.399 32.4733 115.506 29.7144 108.492 28.6754C107.802 28.5688 107.1 28.4876 106.415 28.4251C106.445 27.9646 106.467 27.4948 106.479 27.0329C106.662 19.546 104.634 13.9203 100.964 12.637C97.4471 11.4006 92.5795 14.2762 88.1441 19.8141C87.7043 20.3647 87.2819 20.9167 86.866 21.4954C86.1871 21.0404 85.4974 20.6108 84.8301 20.2267C78.8379 16.7091 73.0401 15.4598 70.1963 17.874C67.2583 20.3682 67.5582 26.6879 70.1862 33.3998C70.4031 33.9408 70.62 34.4818 70.8637 35.0161C70.1794 35.3554 69.5203 35.7054 68.8504 36.0808C62.7886 39.5351 59.2979 43.8198 59.9613 47.4784C60.6412 51.2518 65.7612 54.2207 72.9232 55.2626C73.4937 55.3423 74.0736 55.414 74.6723 55.4696C74.6176 56.2251 74.5976 56.9833 74.587 57.7334C74.5282 64.68 76.4917 69.829 79.9909 71.064C83.6088 72.3432 88.7632 69.3854 93.2798 63.7141C93.6225 63.2781 93.9666 62.8248 94.3122 62.3541C94.6517 62.5816 94.9926 62.7917 95.3335 63.0018C101.724 66.8738 107.961 68.3147 110.946 65.7805C113.799 63.3583 113.432 57.3215 110.863 50.7365ZM108.089 31.2897C114.101 32.1803 118.058 34.4118 118.459 36.6177C118.891 38.9744 115.717 42.7163 110.024 45.8415C109.648 46.0478 109.281 46.2461 108.899 46.4257C107.603 43.9488 106.151 41.5558 104.541 39.2813C105.258 36.578 105.804 33.8263 106.15 31.0504C106.809 31.1195 107.441 31.1953 108.089 31.2897ZM78.6164 37.6675C78.2031 38.8402 77.7977 40.0222 77.435 41.2163C76.3535 39.6208 75.3553 37.9706 74.4483 36.2753C76.1545 35.5358 77.9953 34.8593 79.936 34.243C79.4734 35.3769 79.0283 36.5121 78.6164 37.6675ZM87.5329 25.2154C88.9803 26.3069 90.4429 27.5307 91.8967 28.8585C90.6933 29.0261 89.479 29.2191 88.2792 29.4481C87.0888 29.6691 85.8875 29.9155 84.7007 30.1979C85.6024 28.4173 86.5554 26.7542 87.5329 25.2154ZM83.2257 33.2871C85.0504 32.8015 86.8947 32.3959 88.752 32.0438C90.6093 31.6917 92.4766 31.4277 94.357 31.2171C95.6544 32.5327 96.9286 33.9163 98.1702 35.376C99.4118 36.8356 100.581 38.3245 101.663 39.8066C101.153 41.6092 100.583 43.3984 99.9531 45.1741C99.3229 46.9498 98.6247 48.7027 97.8759 50.4341C96.0432 50.9104 94.1895 51.3239 92.3148 51.6747C90.4575 52.0268 88.5981 52.3002 86.7163 52.5281C85.4269 51.2219 84.1462 49.8116 82.8966 48.3426C81.6471 46.8735 80.4844 45.4113 79.3992 43.964C79.9026 42.1347 80.4742 40.3282 81.1137 38.5445C81.7533 36.7608 82.4594 35.0172 83.2257 33.2871ZM92.7782 54.2784C94.0128 54.0521 95.2329 53.7898 96.4544 53.5101C95.5984 55.2681 94.6599 56.9672 93.6279 58.6328C92.0647 57.4623 90.5609 56.2091 89.1339 54.8746C90.3547 54.7084 91.5704 54.4981 92.7782 54.2784ZM101.128 49.5102C101.582 48.367 102.029 47.2144 102.441 46.059C102.851 44.921 103.236 43.7723 103.596 42.6129C104.689 44.2792 105.661 45.936 106.496 47.5472C104.736 48.2999 102.951 48.9458 101.128 49.5102ZM103.516 30.87C103.278 32.7638 102.936 34.6494 102.501 36.5015C101.009 34.5769 99.4256 32.7149 97.765 30.9342C99.7597 30.8199 101.694 30.8057 103.516 30.87ZM100.056 15.1157C102.316 15.9042 103.966 20.5135 103.817 26.9726C103.809 27.3824 103.782 27.8082 103.763 28.2433C100.957 28.1281 98.1423 28.213 95.3482 28.4742C93.3612 26.5195 91.2488 24.7034 89.0205 23.0179C89.3973 22.4885 89.7994 21.9699 90.2015 21.4513C94.011 16.7026 97.9414 14.3648 100.056 15.1157ZM73.284 33.896C73.0627 33.4071 72.8588 32.9195 72.6643 32.424C71.6 29.8954 70.6721 26.7837 70.5882 24.0351C70.4435 22.5304 70.9193 21.0308 71.9074 19.8857C73.6307 18.4228 78.3491 19.5089 83.4756 22.5045C84.1176 22.8779 84.7487 23.2767 85.3704 23.6835C83.8682 26.0545 82.5152 28.5245 81.3315 31.0602C78.5993 31.8328 75.9048 32.7829 73.284 33.896ZM73.3359 52.6403C70.6008 52.3035 67.9506 51.4757 65.523 50.185C64.1405 49.5701 63.0747 48.4124 62.5911 46.986C62.192 44.7628 64.9907 41.3233 70.1799 38.3682C70.7947 38.0234 71.4176 37.6881 72.0469 37.3794C73.3777 39.859 74.8657 42.2374 76.5282 44.516C75.8179 47.246 75.2864 50.0337 74.938 52.827C74.3914 52.7754 73.8542 52.7159 73.3359 52.6403ZM77.574 52.9901C77.798 51.1563 78.135 49.2267 78.5807 47.2531C79.3071 48.1833 80.0762 49.1256 80.8721 50.0613C81.6918 51.025 82.5145 51.9541 83.3575 52.8498C81.4294 53.0042 79.502 53.0452 77.574 52.9901ZM85.1514 67.6176C83.9309 68.5087 82.3799 68.8586 80.8908 68.5759C78.759 67.8237 77.1909 63.6924 77.2347 57.7577C77.2395 57.0769 77.2724 56.3722 77.3068 55.65C80.116 55.7306 82.9237 55.619 85.7128 55.3137C87.7143 57.3045 89.8585 59.158 92.1295 60.8556C91.823 61.2769 91.5085 61.6889 91.1955 62.0835C89.5516 64.2688 87.4965 66.1423 85.1514 67.6176ZM96.7226 60.7268C96.415 60.5367 96.1074 60.3467 95.8013 60.1393C97.297 57.7416 98.6182 55.2342 99.7795 52.653C102.465 51.9205 105.087 50.9996 107.652 49.9171C107.925 50.5236 108.172 51.1193 108.404 51.6963C110.606 57.3356 110.967 62.2979 109.254 63.7529C107.408 65.3197 102.248 64.0767 96.7226 60.7268ZM86.2206 45.5206C88.2342 47.8879 91.7962 48.1672 94.1786 46.1446C96.561 44.1221 96.8598 40.5652 94.8462 38.1979C92.8326 35.8307 89.2706 35.5513 86.8882 37.5739C84.5058 39.5964 84.207 43.1533 86.2206 45.5206Z"
            fill="#EE6151"
          />
          <Path
            d="M102.164 59.6228C106.488 55.3008 103.426 47.913 97.3105 47.913H6.87762C0.762617 47.913 -2.29997 55.3008 2.02428 59.6228L45.5823 103.136V142.242H34.1866C29.6914 142.242 26.0468 145.883 26.0468 150.374C26.0468 151.272 26.7753 152 27.6748 152H76.5134C77.4129 152 78.1414 151.272 78.1414 150.374C78.1414 145.883 74.4968 142.242 70.0016 142.242H58.6059V103.136L102.164 59.6228Z"
            fill="#F5F5F5"
          />
        </Svg>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#423560",
    alignItems: "center",
    justifyContent: "center",
  },
});