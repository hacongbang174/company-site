import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faGlobe,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
  return (
    <div className="text-center text-lg-start text-white bg-gray-700">
      <section className="m-4 p-4">
        <div className="text-md-start mt-5 flex">
          <div className="mx-auto mb-4 w-1/4 items-center">
            <h6 className="text-uppercase fw-bold mb-4">
              CÔNG TY CỔ PHẦN ĐẦU TƯ CÔNG NGHỆ TST ECO
            </h6>
            <h6 className="text-uppercase fw-bold mb-4">TST ECO JSC</h6>
          </div>

          <div className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
            <p>
              <a href="#!" className="text-reset">
                Angular
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                React
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Vue
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Laravel
              </a>
            </p>
          </div>

          <div className="mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Liên hệ</h6>
            <p className="flex items-center">
              <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4 mr-4" />
              Tầng 3, 20 Lê Lợi, TP Huế, Thừa Thiên Huế.
            </p>
            <p className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 mr-4" />
              <span>info.tsteco@gmail.com</span>
            </p>
            <p className="flex items-center">
              <FontAwesomeIcon icon={faGlobe} className="w-4 h-4 mr-4" />
              https://gce-community-app.web.app
            </p>
            <p className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-4" />
              <span>(+84) 096 550 4446</span>
            </p>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      >
        <span className="mr-2">© 2024:</span>
        <a
          className="text-reset fw-bold"
          href="https://gce-community-app.web.app"
        >
          Designed and Maintained by TST ECO JSC
        </a>
      </div>
    </div>
  )
}
