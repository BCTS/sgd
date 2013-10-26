package sgd.rs;

import com.emc.xcp.services.framework.rs.AbstractObjectController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import sgd.domain.Expediente_sisged;


@Controller(value = "sgd.rs.Expediente_sisgedController")
@RequestMapping(value = "/application/sgd_expediente_sisgeds/{id}")
public class Expediente_sisgedController extends AbstractObjectController<Expediente_sisged> {
    public Expediente_sisgedController() {
        super(Expediente_sisged.class);
    }
}