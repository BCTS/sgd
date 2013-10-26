package sgd.rs;

import com.emc.xcp.services.framework.rs.AbstractObjectTemplateController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import sgd.domain.Expediente_sisged;


@Controller(value = "sgd.rs.Expediente_sisgedTemplateController")
@RequestMapping(value = "/application/sgd_expediente_sisgeds/template")
public class Expediente_sisgedTemplateController extends AbstractObjectTemplateController<Expediente_sisged> {
    public Expediente_sisgedTemplateController() {
        super(Expediente_sisged.class);
    }
}