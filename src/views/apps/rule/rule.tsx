import { Box, Typography } from '@mui/material';
import React from 'react';

const rule = () => {
  return (
    <>
      <div style={{ marginTop: '50px' }}>
        <Typography variant="h1" align="center" my={5}>
          Chính sách và điều khoản
        </Typography>

        <Box
          sx={{
            height: '500px',
            padding: '16px',
            paddingBottom: '20px', // Add padding to the bottom of the content
          }}
        >
          <div style={{ paddingBottom: '100px' }}>
            <h3>MỤC I. ĐỐI TÁC</h3>
            <div>
              <p>Đối tác hoạt động trên hệ thống Redtech bao gồm nhưng không giới hạn bởi:</p>
              <ul>
                <li>Các nhà phát triển ứng dụng, đang sở hữu ứng dụng có nhiều người sử dụng.</li>
                <li>
                  Chủ sở hữu fanpage, website (mobile & desktop), kênh Youtube,... có khả năng
                  truyền thông tới nhiều đối tượng người sử dụng.
                </li>
                <li>
                  Các cá nhân biết sử dụng, huy động một lượng lớn traffic thông qua Google AdWords,
                  Facebook Ads, Zalo, Cốc Cốc...
                </li>
                <li>Đại diện cho các Advertising agency/Ad network khác.</li>
              </ul>
            </div>
            <h3>MỤC II. HÌNH THỨC HỢP TÁC</h3>
            <div>
              <p>
                Đối tác có thể lựa chọn các hình thức Hợp tác cùng Redtech được liệt kê dưới đây:
              </p>
              <ul>
                <li>
                  <strong>CPI (Cost per Install):</strong>
                  ghi nhận hoa hồng trên mỗi lượt cài đặt và sử dụng ứng dụng/ game trên các thiết
                  bị mới, trong điều kiện có kết nối mạng. Đối tác lựa chọn các Offer phù hợp với
                  mình theo loại ứng dụng, loại hệ điều hành, lãnh thổ, và giá cho mỗi conversion.
                </li>
                <li>
                  <strong>CPA (Cost per Action):</strong>
                  ghi nhận hoa hồng cho mỗi action thành công như đặt hàng, điền thông tin cá nhân,
                  xác nhận email,... tùy theo từng Offer. Các Offer CPA của Redtech có mức hoa hồng
                  cao, với chọn lựa đa dạng về đối tượng khách hàng và khu vực địa lý.
                </li>
                <li>
                  <strong>CPO (Cost per Order):</strong>
                  Đối tác sẽ nhận được hoa hồng trên mỗi đơn đặt hàng được xác nhận qua điện thoại,
                  email,... Các Offer CPO của Redtech hầu hết là những Offer độc quyền, với số lượng
                  campaign phong phú về phân khúc thu nhập, đối tượng khách hàng và khu vực địa lý.
                  Đối tác có thể chọn lựa các sản phẩm CPO phù hợp và vận hành truyền thông tin hay
                  chạy Quảng Cáo để thu được hiệu quả đặt hàng tốt nhất. Redtech sẽ hỗ trợ Landing
                  page và Banner sản phẩm để giúp Đối tác chạy chiến dịch thuận lợi hơn.
                </li>
                <li>
                  <strong>CPC (Call per Click):</strong>
                  ghi nhận hoa hồng trên mỗi lần nhấp chuột vào biểu ngữ, hình ảnh quảng cáo. Bên
                  cạnh với các Offer, Redtech cung cấp các công cụ/ tool giúp Đối tác chạy chiến
                  dịch dễ dàng hơn.
                </li>
              </ul>
            </div>
            <h3>MỤC III. ĐIỀU KHOẢN HỢP TÁC</h3>
            <h4>ĐIỀU 1. PHẠM VI HỢP TÁC</h4>
            <div>
              <ol>
                <li>
                  Bằng việc ký kết Điều khoản chung này, Đối tác đồng ý trở thành thành viên hoạt
                  động trên hệ thống Redtech, cung cấp dịch vụ quảng cáo dưới các hình thức phù hợp
                  với quy định của pháp luật Việt Nam.
                </li>
                <li>
                  Đối với mỗi trường hợp cụ thể, các Bên có thể sẽ cùng nhau thảo luận chi tiết về
                  Chiến dịch như tên Chiến dịch, số lượng, hình thức và đơn giá.
                </li>
                <li>
                  Redtech được thừa nhận là chủ sở hữu hoặc được cấp quyền sử dụng đối với dịch vụ/
                  sản phẩm được quảng cáo bao gồm thương hiệu, tên miền, logo và tất cả những đặc
                  điểm, tính năng của dịch vụ/ sản phẩm đó.
                </li>
                <li>
                  Các Bên đồng ý rằng tất cả các quyền sở hữu về nhận diện thương hiệu, tên miền
                  website dịch vụ là quyền sở hữu duy nhất của Redtech và Redtech không cho phép Đối
                  tác hoặc bất kỳ bên thứ ba nào có quyền nhân bản, can thiệp, gây xáo trộn, hoặc
                  gây tổn hại một phần hay toàn bộ tính năng, bản chất dịch vụ dưới bất cứ phương
                  thức nào mà không có sự chấp thuận bằng văn bản của Redtech.
                </li>
                <li>
                  Điều khoản chung này sẽ không thiết lập bất kỳ mối quan hệ đại lý, liên kết, hoặc
                  ràng buộc nào khác giữa Các Bên ngoài phạm vi hợp tác đã nêu ở phần trên.
                </li>
              </ol>
            </div>
            <h4>ĐIỀU 2. THỜI HẠN HỢP TÁC</h4>
            <div>
              <p>
                Thời hạn hợp tác giữa các Bên là được xác lập kể từ ngày Đối tác xác nhận đồng ý các
                quy định trong Điều khoản chung này và được phê duyệt trở thành thành viên trên hệ
                thống Redtech tới ngày:
              </p>
              <ul>
                <li>
                  Tài khoản của Đối tác trên hệ thống Redtech bị khóa hoặc tạm thời không được phép
                  hoạt động; hoặc
                </li>
                <li>Hệ thống Redtech không còn hoạt động</li>
              </ul>
            </div>
            <h4>ĐIỀU 3. ĐĂNG KÝ TÀI KHOẢN</h4>
            <div>
              <ol>
                <li>
                  Để hoạt động trên hệ thống Redtech, Đối tác phải thực hiện đăng ký tạo tài khoản
                  trực tuyến với tên đăng nhập và mật khẩu (sau đây gọi là "Tài khoản").
                </li>
                <li>
                  Đối tác cam kết sử dụng các thông tin đầy đủ, chính xác, và gần nhất cho Tài khoản
                  đăng ký và tiến hành cập nhật một cách kịp thời thông tin khi có bất kỳ sự thay
                  đổi nào. Redtech được miễn trừ khỏi các trách nhiệm phát sinh do các thông tin
                  không chính xác và/hoặc không được cập nhật trên tài khoản của Đối tác.
                </li>
                <li>
                  Thông tin yêu cầu đối với Đối tác là Cá nhân:
                  <ul>
                    <li>Bản sao CCCD/ Thẻ căn cước/ Hộ chiếu;</li>
                    <li>Số điện thoại liên hệ;</li>
                    <li>Số tài khoản Ngân hàng nhận thanh toán mang tên Đối tác.</li>
                  </ul>
                </li>
                <li>
                  Thông tin yêu cầu đối với Đối tác là Tổ chức/Doanh nghiệp:
                  <ul>
                    <li>Bản sao Giấy chứng nhận đăng ký doanh nghiệp hoặc tài liệu tương đương;</li>
                    <li>Số điện thoại liên hệ;</li>
                    <li>Số tài khoản Ngân hàng nhận thanh toán mang tên Đối tác.</li>
                  </ul>
                </li>
                <li>
                  Việc Đối tác đăng ký thành công tài khoản được coi như Đối tác đã chấp nhận các
                  quy định trong Điều khoản chung này.
                </li>
                <li>
                  Đối tác có nghĩa vụ giữ an toàn và bảo vệ mật cho Tài khoản, mọi hành động đăng
                  nhập vào trang mạng thông qua Tài khoản đều được coi là hành động của Đối tác.
                </li>
                <li>
                  Tài khoản sẽ không được phổ biến rộng rãi, không được chuyển nhượng hoặc chuyển
                  giao dưới bất kỳ hình thức nào. Trường hợp có nghi ngờ bên thứ ba dùng Tài khoản,
                  Đối tác phải thông báo cho Redtech để được hỗ trợ xử lý.
                </li>
                <li>
                  Các thông tin về Đối tác sẽ được Redtech bảo mật, và được coi như Thông tin bảo
                  mật của Redtech.
                </li>
              </ol>
            </div>
            <h4>ĐIỀU 4. TRÁCH NHIỆM CỦA ĐỐI TÁC</h4>
            <div>
              <ol>
                <li>
                  Đối tác, bằng chi phí của mình, có nghĩa vụ thực hiện quảng bá sản phẩm/ dịch vụ
                  của Redtech theo đúng phạm vi hợp tác đã thỏa thuận. Đối tác đảm bảo các quảng cáo
                  Đối tác sử dụng không mang tính chất lừa đảo, vi phạm thuần phong mỹ tục hay vi
                  phạm pháp luật, và không vi phạm các chính sách của Redtech đã được công bố.
                </li>
                <li>
                  Đối tác phối hợp thực hiện việc đối soát, xác nhận số liệu và thực hiện thanh toán
                  theo quy định tại Điều khoản chung này trên cơ sở dữ liệu xuất ra từ hệ thống của
                  Redtech.
                </li>
                <li>
                  Đối tác không sử dụng các hình thức quảng cáo vi cấm, tài liệu quảng cáo vi phạm
                  Luật Sở Hữu Trí Tuệ hoặc sử dụng trái phép hình ảnh, âm thanh hoặc tài liệu quảng
                  cáo của bất kỳ bên thứ ba nào khác.
                </li>
                <li>Đối tác thực hiện bảo mật các thông tin liên quan đến Tài khoản được tạo.</li>
                <li>
                  Đối tác hiểu và đồng ý rằng trong quá trình vận hành, có những thời điểm hệ thống
                  Redtech có thể không truy cập được, hoặc không vận hành đúng chức năng do các
                  nguyên nhân, bao gồm nhưng không giới hạn bởi: (i) lỗi hệ thống; hoặc (ii) bảo trì
                  định kỳ; hoặc (iii) các sự kiện vượt ngoài tầm kiểm soát của Redtech mà không thể
                  thấy trước như sự cố mạng trên diện rộng, tin tặc.... Khi đó Đối tác đồng ý không
                  có bất kỳ khiếu nại hoặc theo đuổi kiện tụng chống lại Redtech.
                </li>
                <li>
                  Đối tác cam kết rằng các phương tiện truyền thông của Đối tác, như Website,
                  Fanpage, Blog… (i) không vi phạm hoặc chứa đựng các nội dung vi phạm pháp luật,
                  phong tục tập quán, thuần phong mỹ tục, bạo lực, hoặc gây ấn tượng không tốt tới
                  người dùng; (ii) hoạt động ổn định, đáp ứng các yêu cầu kỹ thuật; (iii) có khả
                  năng kết nối với hệ thống Redtech và hiển thị nội dung quảng cáo; (iv) không chứa
                  đựng trực tiếp hoặc gián tiếp các nguồn gây hại như virus, spam… làm ảnh hưởng tới
                  hệ thống của Redtech và người dùng.
                </li>
                <li>
                  Đối tác không tự ý sửa đổi các tài liệu quảng cáo mà chưa có sự đồng ý của
                  Redtech. Redtech được miễn trừ các nghĩa vụ liên quan khi có xảy ra bất kỳ khiếu
                  nại, khiếu kiện, hoặc tranh chấp từ một bên thứ ba do Đối tác vi phạm nội dung tại
                  điều này.
                </li>
                <li>
                  Đối tác cam kết không thực hiện bất kỳ hành vi gian lận nào để được ghi nhận doanh
                  thu trong quá trình hoạt động. Redtech được bảo lưu quyền lưu trữ toàn bộ lịch sử
                  hoạt động của Đối tác và thực hiện thanh tra, rà soát khi có nghi ngờ vi phạm.
                  Redtech có quyền áp dụng các biện pháp xử lý gian lận theo quy định tại Điều 5
                  dưới đây.
                </li>
              </ol>
            </div>
            <h4>ĐIỀU 5. XỬ LÝ GIAN LẬN</h4>
            <h3>1. Các hình thức gian lận</h3>
            <p>
              Hành vi cố tình sử dụng các công cụ không được phép, hoặc vi phạm các quy tắc của
              Redtech với mục đích để được ghi nhận doanh thu hoặc can thiệp trái phép hệ thống của
              Redtech được coi là hành vi gian lận.
            </p>
            <p>Hành vi gian lận bao gồm nhưng không giới hạn bởi các hành vi sau:</p>
            <ul>
              <li>Sử dụng các thiết bị ảo để được ghi nhận doanh thu;</li>
              <li>
                Ảnh hưởng tới hệ thống Redtech, tạo ra các kết quả mà người dùng cuối không mong
                đợi; hoặc gây ra sự sai lệch dữ liệu;
              </li>
              <li>Áp dụng bổ sung đối với hình thức quảng cáo CPO:</li>
              <ul>
                <li>
                  Tự tạo đơn hàng ảo bằng các hình thức tự đặt hàng, tự xác nhận và không nhận hàng
                  khi được giao;
                </li>
                <li>Tỷ lệ hàng hoàn cao trên 40%;</li>
                <li>
                  Tạo ra lượng truy cập (impression, click) ảo và tự đưa ra các chương trình ưu đãi
                  không nằm trong chính sách của nhà cung cấp.
                </li>
              </ul>
              <li>
                Giả mạo thông tin của nhà quảng cáo hoặc nhà cung cấp, KOLs của sản phẩm. Nghiêm cấm
                sử dụng hình ảnh người nổi tiếng khi chưa có thỏa thuận hợp tác quảng cáo Sản phẩm.
              </li>
              <li>
                Tất cả các hình thức spam lấy dữ liệu người dùng, quét data từ nguồn khác mà không
                có được sự đồng ý hoặc người dùng không ý thức được.
              </li>
              <li>
                Hành vi chạy quảng cáo và liên hệ trực tiếp tới bất kỳ bộ phận nào của nhà cung cấp
                mà không thông qua hệ thống Redtech.
              </li>
              <li>
                Hành vi chạy từ khóa thương hiệu hoặc sử dụng từ khóa cố tình viết sai thương hiệu
                để gây nhầm lẫn (tùy theo yêu cầu của từng nhà quảng cáo).
              </li>
              <li>
                Nội dung quảng cáo sử dụng từ ngữ vi phạm, không được phép đối với các sản phẩm Thực
                phẩm chức năng. Cụ thể:
              </li>
              <ul>
                <li>Không dùng từ "Thuốc" - có thể sửa thành "Sản phẩm, TPCN...";</li>
                <li>
                  Không dùng từ "Điều Trị" - có thể sửa thành "Hỗ trợ điều trị, cải thiện,..";
                </li>
                <li>Không dùng từ "Đông Y";</li>
                <li>Không dùng từ "Nhà Thuốc" - có thể sửa thành "Trung tâm,..";</li>
                <li>Không dùng từ "Chữa" - có thể sửa thành "Hỗ trợ điều trị, Cải thiện,...";</li>
                <li>Không dùng từ "Thầy, Lương Y, Thầy thuốc,"</li>
                <li>Không cam kết dứt điểm trong bao nhiêu ngày...</li>
                <li>
                  Nếu sử dụng ảnh Người, ảnh hiệu thuốc thì phải là ảnh thật, không được tự chế/
                  ghép ảnh.
                </li>
              </ul>
            </ul>
            <h3>2. Xử lý gian lận và vi phạm</h3>
            <p>Trường hợp Redtech phát hiện có gian lận/ vi phạm từ Đối tác, Redtech được quyền:</p>
            <ul>
              <li>Ngừng hợp tác;</li>
              <li>Không công nhận doanh thu, phạt doanh thu và khóa Tài khoản.</li>
              <li>Yêu cầu bồi thường khi xảy ra thiệt hại đối với hệ thống.</li>
              <li>
                Đối với trường hợp Publisher chạy traffic thật nhưng tỉ lệ hoàn hàng cao hơn 40% (do
                traffic kém chất lượng), Redtech chỉ chấp nhận thanh toán cho Publisher theo hình
                thức CPS, có nghĩa là thanh toán theo số lượng những đơn hàng được GIAO THÀNH CÔNG
                nếu tổng doanh thu của những đơn hàng giao thành công này ĐẠT TỪ 1 triệu VND trở
                lên.
              </li>
            </ul>
            <h4>ĐIỀU 6. ĐỐI SOÁT VÀ THANH TOÁN</h4>
            <h3>1. Đối với Đối tác là Cá nhân</h3>
            <h4>1.1. Đối soát</h4>
            <p>Redtech cung cấp hệ thống báo cáo online cho Đối tác trên trang </p>
            <p>
              Thông qua Tài khoản ngân hàng đã đăng ký, Đối tác trực tiếp theo dõi số lượng được ghi
              nhận trên tất cả các hình thức quảng cáo.
            </p>
            <h4>1.2. Thời gian thanh toán</h4>
            <p>Đối với hình thức CPO, Redtech thanh toán cho Đối tác theo Net 7*:</p>
            <p>DOANH THU ĐỐI TÁC NHẬN ĐƯỢC = DOANH THU TUẦN + DOANH THU TRƯỚC ĐÓ</p>
            <ul>
              <li>
                DOANH THU TUẦN = Doanh thu phát sinh từ Thứ 2 đến Chủ Nhật tuần trước đã được
                Advertiser duyệt và xác nhận thanh toán
              </li>
              <li>
                DOANH THU TRƯỚC ĐÓ = Các khoản doanh thu chờ duyệt trong quá khứ được Advertiser xác
                nhận thanh toán trong tuần vừa rồi.
              </li>
              <li>
                Doanh thu tối thiểu mỗi kì thanh toán phải đạt ít nhất 1.000.000 VNĐ (đối với hình
                thức CPO) trước thuế.
              </li>
            </ul>
            <p>Đối với những hình thức khác, Redtech sẽ thanh toán cho Đối tác theo tháng.</p>
            <p>
              Để đảm bảo thời gian thanh toán, Redtech khuyến nghị Đối tác sử dụng tài khoản ngân
              hàng cùng hệ thống với ngân hàng với Redtech là Ngân hàng Ngoại thương Việt Nam –
              Vietcombank. Redtech không chịu trách nhiệm về việc thanh toán chậm do các tài khoản
              khác hệ thống.
            </p>
            <h4>1.3. Quy định về Thuế</h4>
            <p>
              Redtech thực hiện khấu trừ 10% vào tổng doanh thu được thanh toán của Đối tác theo quy
              định của Pháp luật.
            </p>
            <h3>2. Đối với Đối tác là Tổ chức/Doanh nghiệp</h3>
            <h4>2.1. Đối soát</h4>
            <p>
              Redtech cung cấp hệ thống báo cáo online cho Đối tác trên trang và thanh toán theo Net
              7* đối với hình thức CPO. Các hình thức khác, Redtech sẽ thanh toán theo tháng.
            </p>
            <p>
              Nếu Đối tác không có nhu cầu nhận thanh toán hàng tuần, Redtech sẽ linh hoạt để đảm
              bảo Đối tác sẽ nhận được thanh toán duy nhất một lần vào một ngày Thứ Sáu cố định
              trong tháng.
            </p>
            <p>Thời gian đối soát sẽ theo thoả thuận ghi trong hợp đồng.</p>
            <h4>2.2. Thời gian thanh toán</h4>
            <p>
              Redtech sẽ thanh toán cho Đối tác vào khoảng thời gian cố định hàng tháng theo thoả
              thuận khi ký hợp đồng.
            </p>
            <p>
              Để đảm bảo thời gian thanh toán, Redtech khuyến nghị Đối tác sử dụng tài khoản ngân
              hàng cùng hệ thống với ngân hàng với Redtech là Ngân hàng Ngoại thương Việt Nam –
              Vietcombank. Redtech không chịu trách nhiệm về việc thanh toán chậm do các tài khoản
              khác hệ thống.
            </p>
            <h4>
              2.3. Khi thực hiện thanh toán, Đối tác có trách nhiệm gửi Redtech các giấy tờ sau (nếu
              có):
            </h4>
            <ul>
              <li>Biên bản nghiệm thu/ Biên bản xác nhận doanh thu;</li>
              <li>Hóa đơn giá trị gia tăng tương ứng với tổng số tiền Redtech phải thanh toán.</li>
            </ul>
            <h4>ĐIỀU 7. BẢO MẬT, KHÔNG CẠNH TRANH VÀ CÁC QUY ĐỊNH KHÁC</h4>
            <ol>
              <li>
                Trong quá trình hợp tác, Đối tác công nhận rằng Đối tác có khả năng tiếp cận với
                những Thông tin bảo mật của Redtech, vì vậy Đối tác có nghĩa vụ tôn trọng và sử dụng
                thông tin một cách đúng đắn.
              </li>
              <li>
                Đối tác đồng ý và công nhận rằng Đối tác sẽ không sử dụng Thông tin bảo mật của
                Redtech để vụ lợi và luôn giữ tuyệt mật những thông tin này. Đối tác sẽ không sử
                dụng, tiết lộ, xuất bản, chuyển giao hoặc cung cấp thông tin cho bất kì bên thứ ba
                dưới bất kì hình thức nào ngoài mục đích phục vụ nội dung hợp tác giữa các Bên.
              </li>
              <li>
                Quy định tại điều này cũng áp dụng đối với tất cả cá nhân có quyền và nghĩa vụ liên
                quan đến việc thực hiện phạm vi hợp tác bao gồm người quản lý, người cố vấn, các
                phòng Đối tác liên quan và nhân sự trực tiếp thực hiện công việc.
              </li>
            </ol>
            <h4>ĐIỀU 8. MIỄN TRỪ TRÁCH NHIỆM</h4>
            <p>
              Trong mọi trường hợp, Redtech không chịu trách nhiệm cho bất kỳ khiếu nại, khiếu kiện
              nào của bất kỳ bên thứ ba nào liên quan đến các hoạt động của Đối tác trong quá trình
              thực hiện hoạt động quảng cáo. Các nghĩa vụ phát sinh đối với bên thứ ba liên quan đến
              hoạt động của Đối tác thuộc trách nhiệm duy nhất của Đối tác.
            </p>
            <h4>ĐIỀU 9. CHẤM DỨT HỢP TÁC</h4>
            <p>Hợp tác giữa các Bên sẽ chấm dứt trong trường hợp sau:</p>
            <ul>
              <li>Các Bên thỏa thuận chấm dứt hợp tác;</li>
              <li>Một Bên bị giải thể hoặc phá sản;</li>
              <li>
                Các trường hợp bất khả kháng xảy ra dẫn đến một Bên không thể tiếp tục thực hiện
                nghĩa vụ của mình trong thời gian 03 tháng liên tục mặc dù đã cố gắng hết mức có thể
                để khắc phục;
              </li>
              <li>
                Nếu Đối tác vi phạm quy định tại Điều khoản chung và không hoàn thành việc sửa chữa,
                khắc phục vi phạm trong thời hạn mà Redtech thông báo cho Đối tác. Trong trường hợp
                này, Đối tác phải bồi thường toàn bộ thiệt hại thực tế và trực tiếp cho Redtech.
              </li>
            </ul>
            <h4>ĐIỀU 10. CÁC ĐIỀU KHOẢN KHÁC</h4>
            <ol>
              <li>
                Các quy định trong Điều khoản chung này được điều chỉnh bởi pháp luật của Việt Nam.
              </li>
              <li>
                Mọi tranh chấp phát sinh trong quá trình hợp tác trước hết sẽ được giải quyết thông
                qua thương lượng giữa các Bên. Nếu việc giải quyết không đạt được bằng thương lượng,
                hòa giải thì một Bên có quyền đưa tranh chấp ra giải quyết tại Tòa án có thẩm quyền
                tại Việt Nam.
              </li>
              <li>
                Điều khoản chung này vẫn có giá trị trong trường hợp một trong các Bên có sự thay
                đổi về nhân sự hoặc về cơ cấu quản lý (chia, tách, hợp nhất, sáp nhập, chuyển đổi).
              </li>
              <li>
                Redtech được toàn quyền, bằng ý chí của mình, sửa đổi, bổ sung Điều khoản chung này
                cho phù hợp với tình hình kinh doanh và quy định của pháp luật hiện hành.
              </li>
            </ol>
          </div>
        </Box>
      </div>
    </>
  );
};

export default rule;
