package sgd.rs;

import com.emc.xcp.services.framework.rs.AbstractObjectController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import sgd.domain.Expediente_sisgedDa_def_update_expediente_sisgedInput;


@Controller(value = "sgd.rs.Expediente_sisgedDa_def_update_expediente_sisgedInputController")
@RequestMapping(value = "/application/sgd_expediente_sisgeds/{id}", method = RequestMethod.GET, params = "type=sgd_da_def_update_expediente_sisged")
public class Expediente_sisgedDa_def_update_expediente_sisgedInputController extends AbstractObjectController<Expediente_sisgedDa_def_update_expediente_sisgedInput> {
    public Expediente_sisgedDa_def_update_expediente_sisgedInputController() {
        super(Expediente_sisgedDa_def_update_expediente_sisgedInput.class);
    }
}