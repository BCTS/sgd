package sgd.rs;

import com.emc.xcp.services.content.rs.AbstractFolderController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import sgd.domain.Expediente_sisgedDa_def_create_expediente_sisgedInput;


@Controller(value = "sgd.rs.Expediente_sisgedDa_def_create_expediente_sisgedController")
@RequestMapping(value = "/application/sgd_expediente_sisgeds", method = RequestMethod.POST, params = "type=sgd_da_def_create_expediente_sisged")
public class Expediente_sisgedDa_def_create_expediente_sisgedController extends AbstractFolderController<Expediente_sisgedDa_def_create_expediente_sisgedInput> {
    public Expediente_sisgedDa_def_create_expediente_sisgedController() {
        super(Expediente_sisgedDa_def_create_expediente_sisgedInput.class);
    }
}